import master_1 from './master_1.jpg'
import master_2 from './master_2.png'
import master_3 from './master_3.png'
import master_4 from './master_4.png'

import massage_1 from './massage_1.jpeg'
import massage_2 from './massage_2.jpeg'
import massage_3 from './massage_3.png'
import massage_4 from './massage_4.jpg'
import massage_5 from './massage_5.jpg'
import massage_6 from './massage_6.png'

const RUB_TO_USD = 0.013

export const master_list = [
    {
        name: "Master Nari",
        image: master_3,
        description: "Expert in all massage types. Gentle and attentive, she tailors every session to your needs. Particularly skilled in Slim massage techniques.",
    },
    {
        name: "Master Suda",
        image: master_4,
        description: "Versatile massage therapist. Excellent at Thai massage, focusing on releasing tension and improving overall body balance.",
    },
    {
        name: "Master Radi",
        image: master_2,
        description: "Strong and precise, Master Radi specializes in deep tissue and spa programs. Known for detailed muscle work and professional approach.",
    },
    {
        name: "Master Bunsi",
        image: master_1,
        description: "Balinese master with extensive experience in spa and Balinese massage. Gentle yet powerful, she ensures complete relaxation and rejuvenation.",
    },
]

export const price_list = [
    {
        name: "Traditional Massage",
        price: `60 min / $${Math.round(4000 * RUB_TO_USD)}`,
        image: massage_6
    },
    {
        name: "Relaxing Massage",
        price: `60 min / $${Math.round(4000 * RUB_TO_USD)}`,
        image: massage_2
    },
    {
        name: "Healing Massage",
        price: `60 min / $${Math.round(4000 * RUB_TO_USD)}`,
        image: massage_3
    },
    {
        name: "Sports Massage",
        price: `60 min / $${Math.round(4200 * RUB_TO_USD)}`,
        image: massage_4
    },
    {
        name: "Slim Massage",
        price: `60 min / $${Math.round(4200 * RUB_TO_USD)}`,
        image: massage_5
    },
    {
        name: "Balinese Massage",
        price: `60 min / $${Math.round(4000 * RUB_TO_USD)}`,
        image: massage_1
    },
]

export const spa_list = [
    {
        name: "SPA 'Tibetan Honey Herbs'",
        description: "This procedure is pure bliss for the senses. A combination of oil massage and herbal pouches gently relaxes the body and nourishes it with beneficial elements.",
        description2: "Surrounded by aromas of Thai herbs and oils, you completely unwind and forget your worries.",
        description3: "Dive into a state of serene bliss, like a pleasant dream.",
        price: `$${Math.round(7900 * RUB_TO_USD)}`,
        time: "120 min"
    },
    {
        name: "SPA Facial Care 'Hydration'",
        description: "SPA facial stages:",
        description2: "• Gentle facial scrub",
        description3: "• Face massage with cream",
        description4: "• Facial mask",
        description5: "• Head massage",
        price: `$${Math.round(4600 * RUB_TO_USD)}`,
        time: "60 min"
    },
    {
        name: "SPA Facial Care 'Recovery & Nutrition'",
        description: "SPA facial stages:",
        description2: "• Gentle facial scrub",
        description3: "• Face massage with cream",
        description4: "• Facial mask",
        description5: "• Head massage",
        price: `$${Math.round(4600 * RUB_TO_USD)}`,
        time: "60 min"
    },
    {
        name: "SPA Facial with Herbal Pouches",
        description: "Massage relieves muscle tension, promotes relaxation, and improves circulation for natural skin renewal. Herbs reduce inflammation and help fight breakouts.",
        price: `$${Math.round(3800 * RUB_TO_USD)}`,
        time: "30 min"
    },
    {
        name: "SPA 'Imperial Silk'",
        description: "SPA stages:",
        description2: "• Shower with body scrub-gel",
        description3: "• Nourishing body wrap",
        description4: "• Rejuvenating facial SPA",
        description5: "• Oil body massage",
        description6: "• Tea ceremony",
        price: `$${Math.round(8200 * RUB_TO_USD)}`,
        time: "120 min"
    },
    {
        name: "SPA 'Detox'",
        description: "SPA stages:",
        description2: "• Shower with body scrub-gel",
        description3: "• Nourishing body wrap",
        description4: "• Head massage",
        description5: "• Anti-cellulite massage",
        description6: "• Tea ceremony",
        price: `$${Math.round(8200 * RUB_TO_USD)}`,
        time: "120 min"
    },
]

export const slidesData = [
    {
        title: 'RECHARGE',
        details: [
            { description: 'SPA "Mango King"', frequency: '1 time' },
            { description: 'SPA "Chocolate Bliss"', frequency: '1 time' },
            { description: 'Relax massage procedures: Balinese, Thai, or Lomi-Lomi', frequency: '1 hr x 5 times' }
        ],
        price: `$${Math.round(31000 * RUB_TO_USD)}`
    },
    {
        title: 'TIGER POWER',
        details: [
            { description: 'Athlete’s secret', frequency: '1.5 hr x 2 times' },
            { description: 'Traditional Thai massage', frequency: '1 hr x 2 times' },
            { description: 'Shiatsu massage', frequency: '1 hr x 2 times' },
            { description: 'Sports massage', frequency: '1 hr x 2 times' }
        ],
        price: `$${Math.round(32400 * RUB_TO_USD)}`
    },
    {
        title: 'SLIMNESS',
        details: [
            { description: 'SPA "Power of Three Oceans" at the beginning and end of course', frequency: '2 times' },
            { description: 'Slim massage', frequency: '1 hr x 8 times' },
            { description: 'Recommended 2 sessions per week for maximum effect', frequency: '1 hr' }
        ],
        price: `$${Math.round(45800 * RUB_TO_USD)}`
    },
    {
        title: 'LOVE YOURSELF',
        details: [
            { description: 'Body SPA of your choice', frequency: '1 time' },
            { description: 'Lomi-Lomi massage with face mask', frequency: '1 hr' },
            { description: 'Facial SPA and SPA with herbal pouches', frequency: '1 time each' },
            { description: 'Head massage', frequency: '30 min' },
            { description: 'Scrub-peel "Renewal"', frequency: '1 hr' }
        ],
        price: `$${Math.round(24800 * RUB_TO_USD)}`
    },
    {
        title: 'INTRODUCTION',
        details: [
            { description: '4 types of different massages', frequency: '4 hr x $50 each' },
            { description: 'Hot stone massage "Stone Massage"', frequency: 'or' },
            { description: 'Thai massage with herbal pouches', frequency: '1 hr' },
            { description: 'Head massage', frequency: '30 min' },
            { description: 'Scrub-peel "Renewal"', frequency: '1 hr' }
        ],
        price: `$${Math.round(18720 * RUB_TO_USD)}`
    }
]