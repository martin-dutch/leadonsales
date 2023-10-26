import { Rep } from "src/@types/opportunity";

export const _reps: Rep = {
      name: "Monica",
      accounts: [
        {
          name: "Anton's",
          opportunities: [
            {
              title: "$10k Product Launch",
              amount: "$10,000",
              stage: "In Progress",
              main_contact: "Anthony Jones",
              owner: "Monica Parrish",
              touchpoints: {
                upcoming: [
                  {
                    title: "Product demo w/ Anthony",
                    time: "Next week 3:00 pm – 4:00 pm"
                  }
                ],
                this_week: []
              },
              action_items: [
                "Prepare product demo slides",
                "Coordinate with marketing team"
              ],
              next_steps: [
                "Secure approval for product specs"
              ],
              notes: [
                "Anton's is keen on launching the new range before summer."
              ]
            }
          ]
        },
        {
          name: "Atlas Furniture",
          opportunities: [
            {
              title: "$25k Bill Pay Sell",
              amount: "$25,000",
              stage: "Negotiating",
              main_contact: "James Buckingham",
              owner: "Monica Parrish",
              touchpoints: {
                upcoming: [
                  {
                    title: "Bill Pay walkthrough w/ Jenn",
                    time: "Tomorrow 1:00 pm – 2:00 pm"
                  }
                ],
                this_week: [
                  {
                    title: "Platform overview w/ James",
                    notes: [
                      "Introed through BK's network - Jimmy @ Glasshouse",
                      "Missy said in email chain they may not be ready for new tools",
                      "Tech Stack: CRM: SF, Recording: Gong"
                    ]
                  }
                ]
              },
              action_items: [
                "Set-up follow-up call with Jenn",
                "Touch base with Ron for pricing details",
                "Email James for pricing clarification"
              ],
              next_steps: [
                "Reach agreement about pricing and test run with limited user base"
              ],
              notes: [
                "Client rep is skeptic about AI powered tools – treat with care and focus on product mechanics and customizability"
              ]
            },
            {
              title: "$15k Design Collaboration",
              amount: "$15,000",
              stage: "Negotiation",
              main_contact: "Linda Gates",
              owner: "Monica Parrish",
              touchpoints: {
                upcoming: [],
                this_week: [
                  {
                    title: "Design brainstorming w/ Linda",
                    notes: [
                      "Linda emphasized on modern aesthetics.",
                      "Possible collaboration with their in-house design team."
                    ]
                  }
                ]
              },
              action_items: [
                "Share mood board with Linda",
                "Coordinate with design team for initial drafts"
              ],
              next_steps: [
                "Finalize the design themes"
              ],
              notes: [
                "Atlas Furniture is planning a major rebranding next quarter."
              ]
            }
          ]
        },
      ]
  }