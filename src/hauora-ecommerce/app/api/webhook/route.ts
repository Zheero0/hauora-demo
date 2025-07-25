import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error: any) {
    console.error("Webhook signature verification failed:", error.message)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        console.log("Payment succeeded:", paymentIntent.id)

        // Update order status in Firestore
        // You'll need to store the order ID in the payment intent metadata
        if (paymentIntent.metadata?.orderId) {
          await updateDoc(doc(db, "orders", paymentIntent.metadata.orderId), {
            status: "paid",
            paymentIntentId: paymentIntent.id,
            paidAt: new Date().toISOString(),
          })
        }
        break

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object
        console.log("Payment failed:", failedPayment.id)

        if (failedPayment.metadata?.orderId) {
          await updateDoc(doc(db, "orders", failedPayment.metadata.orderId), {
            status: "failed",
            paymentIntentId: failedPayment.id,
          })
        }
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error("Webhook handler error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
