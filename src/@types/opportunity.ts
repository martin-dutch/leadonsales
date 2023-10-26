
  export interface Rep {
    name: string
    accounts: Account[]
  }
  
  export interface Account {
    name: string
    opportunities: Opportunity[]
  }
  
  export interface Opportunity {
    title: string
    amount: string
    stage: string
    main_contact: string
    owner: string
    touchpoints: Touchpoints
    action_items: string[]
    next_steps: string[]
    notes: string[]
  }
  
  export interface Touchpoints {
    upcoming: Upcoming[]
    this_week: ThisWeek[]
  }
  
  export interface Upcoming {
    title: string
    time: string
  }
  
  export interface ThisWeek {
    title: string
    notes: string[]
  }
  