export const invoice_upcoming_request = {
  created: 1326853478,
  livemode: false,
  id: "evt_00000000000000",
  type: "invoice.upcoming",
  object: "event",
  request: null,
  pending_webhooks: 1,
  api_version: "2019-08-14",
  data: {
    object: {
      id: null,
      object: "invoice",
      account_country: "US",
      account_name: "How Hard Would It Be LLC",
      amount_due: 400,
      amount_paid: 0,
      amount_remaining: 400,
      application_fee_amount: null,
      attempt_count: 1,
      attempted: true,
      auto_advance: false,
      billing: "charge_automatically",
      billing_reason: "subscription_create",
      charge: "ch_00000000000000",
      collection_method: "charge_automatically",
      created: 1569805630,
      currency: "usd",
      custom_fields: null,
      customer: "cus_00000000000000",
      customer_address: null,
      customer_email: "jeff@h2wib.com",
      customer_name: null,
      customer_phone: null,
      customer_shipping: null,
      customer_tax_exempt: "none",
      customer_tax_ids: [],
      default_payment_method: null,
      default_source: null,
      default_tax_rates: [],
      description: null,
      discount: null,
      due_date: null,
      ending_balance: 0,
      footer: null,
      hosted_invoice_url:
        "https://pay.stripe.com/invoice/invst_5cMfYqD6OO9MZF7cADSGDMab9f",
      invoice_pdf:
        "https://pay.stripe.com/invoice/invst_5cMfYqD6OO9MZF7cADSGDMab9f/pdf",
      lines: {
        data: [
          {
            id: "sli_00000000000000",
            object: "line_item",
            amount: 400,
            currency: "usd",
            description: "1 × TestSubscription-TPT (at $4.00 / month)",
            discountable: true,
            livemode: false,
            metadata: {},
            period: {
              end: 1580330990,
              start: 1577652590
            },
            plan: {
              id: "plan_00000000000000",
              object: "plan",
              active: true,
              aggregate_usage: null,
              amount: 400,
              amount_decimal: "400",
              billing_scheme: "per_unit",
              created: 1567392352,
              currency: "usd",
              interval: "month",
              interval_count: 1,
              livemode: false,
              metadata: {},
              nickname: "Monthly",
              product: "prod_00000000000000",
              tiers: null,
              tiers_mode: null,
              transform_usage: null,
              trial_period_days: null,
              usage_type: "licensed"
            },
            proration: false,
            quantity: 1,
            subscription: "sub_00000000000000",
            subscription_item: "si_00000000000000",
            tax_amounts: [],
            tax_rates: [],
            type: "subscription"
          }
        ],
        has_more: false,
        object: "list",
        url: "/v1/invoices/in_1FODM2BK8bf68yOs97zBelFR/lines"
      },
      livemode: false,
      metadata: {},
      next_payment_attempt: null,
      number: "0FC6B22B-0001",
      paid: false,
      payment_intent: "pi_00000000000000",
      period_end: 1569805630,
      period_start: 1569805630,
      post_payment_credit_notes_amount: 0,
      pre_payment_credit_notes_amount: 0,
      receipt_number: null,
      starting_balance: 0,
      statement_descriptor: null,
      status: "void",
      status_transitions: {
        finalized_at: 1569805630,
        marked_uncollectible_at: null,
        paid_at: null,
        voided_at: 1569806116
      },
      subscription: "sub_00000000000000",
      subtotal: 400,
      tax: null,
      tax_percent: null,
      total: 400,
      total_tax_amounts: [],
      webhooks_delivered_at: 1569805632
    }
  }
};

export const customer_subscription_updated = {
  created: 1326853478,
  livemode: false,
  id: "evt_00000000000000",
  type: "customer.subscription.updated",
  object: "event",
  request: null,
  pending_webhooks: 1,
  api_version: "2019-08-14",
  data: {
    object: {
      id: "sub_00000000000000",
      object: "subscription",
      application_fee_percent: null,
      billing: "charge_automatically",
      billing_cycle_anchor: 1575060590,
      billing_thresholds: null,
      cancel_at_period_end: false,
      canceled_at: null,
      collection_method: "charge_automatically",
      created: 1575060590,
      current_period_end: 1577652590,
      current_period_start: 1575060590,
      customer: "cus_00000000000000",
      days_until_due: null,
      default_payment_method: null,
      default_source: null,
      default_tax_rates: [],
      discount: null,
      ended_at: null,
      invoice_customer_balance_settings: {
        consume_applied_balance_on_void: true
      },
      items: {
        object: "list",
        data: [
          {
            id: "si_00000000000000",
            object: "subscription_item",
            billing_thresholds: null,
            created: 1575060590,
            metadata: {},
            plan: {
              id: "plan_00000000000000",
              object: "plan",
              active: true,
              aggregate_usage: null,
              amount: 400,
              amount_decimal: "400",
              billing_scheme: "per_unit",
              created: 1567392352,
              currency: "usd",
              interval: "month",
              interval_count: 1,
              livemode: false,
              metadata: {},
              nickname: "Monthly",
              product: "prod_00000000000000",
              tiers: null,
              tiers_mode: null,
              transform_usage: null,
              trial_period_days: null,
              usage_type: "licensed"
            },
            quantity: 1,
            subscription: "sub_00000000000000",
            tax_rates: []
          }
        ],
        has_more: false,
        url: "/v1/subscription_items?subscription=sub_GGo13b7iy5qi8C"
      },
      latest_invoice: "in_1FkGPSBK8bf68yOshrZJd2tx",
      livemode: false,
      metadata: {},
      next_pending_invoice_item_invoice: null,
      pending_invoice_item_interval: null,
      pending_setup_intent: null,
      plan: {
        id: "plan_00000000000000",
        object: "plan",
        active: true,
        aggregate_usage: null,
        amount: 400,
        amount_decimal: "400",
        billing_scheme: "per_unit",
        created: 1567392352,
        currency: "usd",
        interval: "month",
        interval_count: 1,
        livemode: false,
        metadata: {},
        nickname: "Monthly",
        product: "prod_00000000000000",
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: "licensed"
      },
      quantity: 1,
      start: 1575060590,
      start_date: 1575060590,
      status: "active",
      tax_percent: null,
      trial_end: null,
      trial_start: null
    },
    previous_attributes: {
      plan: {
        id: "OLD_00000000000000",
        object: "plan",
        active: true,
        aggregate_usage: null,
        amount: 400,
        amount_decimal: "400",
        billing_scheme: "per_unit",
        created: 1567392352,
        currency: "usd",
        interval: "month",
        interval_count: 1,
        livemode: false,
        metadata: {},
        nickname: "Monthly",
        product: "prod_00000000000000",
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: "licensed",
        name: "Old plan"
      }
    }
  }
};
