var quizQuestions = [
    {
        question: "您的性别是?",
        answers: [
            {
                type: "Male",
                content: "男"
            },
            {
                type: "Female",
                content: "女"
            }
        ]
    },
    {
        question: "您的年龄是?",
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
        question: "您的年收入是?",
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
                content: "我没在工作"
            }
        ]
    },
    {
        question: "请问您有活跃的EPF户口吗? 您是否有考虑把您的EPF存款用于高等教育资金?",
        answers: [
            {
                type: "yesepfyes",
                content: "我有活跃的EPF户口，也打算取出用于高等教育资金。"
            },
            {
                type: "yesepfno",
                content: "我有活跃的EPF户口，可是不打算取出用于高等教育资金。"
            },
            {
                type: "noepf",
                content: "我并没有活跃的EPF户口。"
            }
        ]
    },
    {
        question: "您打算自己或合股创业吗?",
        answers: [
            {
                type: "Ownbusiness",
                content: "有打算"
            },
            {
                type: "Noownbusiness",
                content: "没有打算"
            }
        ]
    },
    {
        question: "您平常是使用哪一种交通工具?",
        answers: [
            {
                type: "Car",
                content: "个人汽车"
            },
            {
                type: "Bike",
                content: "个人摩托车"
            },
            {
                type: "Public",
                content: "公共交通"
            }
        ]
    },
    {
        question: "您有意购买或售卖房子吗?",
        answers: [
            {
                type: "buy",
                content: "我有打算买房子。"
            },
            {
                type: "sell",
                content: "我有在卖房子"
            },
            {
                type: "notbuysell",
                content: "我并没有想要购买或售卖房子。"
            }
        ]
    },
    {
        question: "您有在订阅Netflix, Spotify 或是有消费在一些类似Steam的游戏平台?",
        answers: [
            {
                type: "yesdigital",
                content: "有"
            },
            {
                type: "nodigital",
                content: "没有"
            }
        ]
    }
  ];
  
  export default quizQuestions;