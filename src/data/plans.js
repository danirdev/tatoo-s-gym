export const plans = [
    {
        title: "Pase Libre",
        price: "15.000",
        frequency: "/mes",
        description: "Ideal para comenzar tu viaje fitness sin compromisos a largo plazo.",
        link: "https://wa.me/5493881234567?text=Hola,%20me%20interesa%20el%20Plan%20Pase%20Libre",
        highlight: false,
        features: [
            {text: "Acceso a sala de musculación", included: true},
            {text: "Acceso a zona de cardio", included: true},
            {text: "Duchas y vestuarios", included: true},
            {text: "Rutina personalizada", included: false}
        ]
    },
    {
        title: "Full Pack",
        price: "20.000",
        frequency: "/mes",
        description: "Para quienes buscan resultados serios con guía profesional.",
        link: "https://wa.me/5493881234567?text=Hola,%20me%20interesa%20el%20Plan%20Full%20Pack",
        highlight: true,
        highlightText: "Más Popular",
        features: [
            {text: "Todo lo del Pase Libre", included: true, bold: true},
            {text: "Rutina personalizada en App", included: true},
            {text: "Seguimiento mensual", included: true},
            {text: "Clases grupales incluidas", included: true}
        ]
    },
    {
        title: "Trimestral",
        price: "50.000",
        frequency: "/total",
        description: "Comprométete con tu cambio y ahorra dinero.",
        link: "https://wa.me/5493881234567?text=Hola,%20me%20interesa%20el%20Plan%20Trimestral",
        highlight: false,
        features: [
            {text: "Ahorras $10.000", included: true},
            {text: "Congelamiento por 7 días", included: true},
            {text: "Acceso total ilimitado", included: true},
            {text: "Regalo de bienvenida", included: true}
        ]
    }
];
