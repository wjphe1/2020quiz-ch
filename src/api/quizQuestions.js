var quizQuestions = [
    {
        question: "Are you a male or female?",
        answers: [
            {
                type: "Male",
                content: "Male"
            },
            {
                type: "Female",
                content: "Female"
            }
        ]
    },
    {
        question: "How old are you?",
        answers: [
            {
                type: "Young",
                content: "<18"
            },
            {
                type: "Adult",
                content: "18-40"
            },
            {
                type: "Senior",
                content: ">40"
            }
        ]
    },
    {
        question: "What is your yearly income range?",
        answers: [
            {
                type: "lowincome",
                content: "<RM20,000"
            },
            {
                type: "midincome",
                content: "RM20,000 - RM100,000"
            },
            {
                type: "highincome",
                content: "RM100,000 - RM2,000,000"
            },
            {
                type: "higherincome",
                content: ">RM2,000,000"
            },
            {
                type: "stopwork",
                content: "I'm not working."
            }
        ]
    },
    {
        question: "Do you have an EPF account? Are you planning to withdraw your EPF for higher education?",
        answers: [
            {
                type: "yesepfyes",
                content: "Yes i have an EPF account and planning to withdraw for studies."
            },
            {
                type: "yesepfno",
                content: "Yes i have an EPF account but not planning to withdraw."
            },
            {
                type: "noepf",
                content: "No i do not have an EPF account."
            }
        ]
    },
    {
        question: "Are you planning to start your own business?",
        answers: [
            {
                type: "Ownbusiness",
                content: "Yes"
            },
            {
                type: "Noownbusiness",
                content: "No"
            }
        ]
    },
    {
        question: "How do you usually travel?",
        answers: [
            {
                type: "Car",
                content: "Car"
            },
            {
                type: "Bike",
                content: "Motocycle"
            },
            {
                type: "Public",
                content: "Public transport"
            }
        ]
    },
    {
        question: "Are you planning to sell or buy a house?",
        answers: [
            {
                type: "buy",
                content: "I'm planning to buy."
            },
            {
                type: "sell",
                content: "I'm planning to sell."
            },
            {
                type: "notbuysell",
                content: "I'm not buying nor selling."
            }
        ]
    },
    {
        question: "Are you subscribed to Netflix, Spotify or been spending on gaming platform such as Steam?",
        answers: [
            {
                type: "yesdigital",
                content: "Yes"
            },
            {
                type: "nodigital",
                content: "No"
            }
        ]
    }
  ];
  
  export default quizQuestions;