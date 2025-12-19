export const contactInfo = {
    address: "Jujuy, Argentina",
    mapLink: "https://maps.app.goo.gl/Ka7gzCmSXZfUFPPp7",
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
    hours: [
        {label: "Lunes - Viernes", time: "07:00 - 12:00 y 14:00 - 23:00", active: true},
        {label: "Turnos (L-V)", time: "20:00 - 21:30 y 21:30 - 23:00", active: true},
        {label: "Sábados", time: "09:00 - 12:00 y 15:00 - 18:00", active: true},
        {label: "Domingos", time: "Cerrado", active: false}
    ]
};
