const users = [
    { firstName: "Elvira", lastName: "Testova", email: "elli.test@gmail.com", phone: "380997654321", IdCard: true },
    { firstName: "Klara", lastName: "Vasileva", email: "klva.test@gmail.com", phone: "380637654321", IdCard: false },
    { firstName: "Yanosh", lastName: "Vovk", email: "YaVo.test@gmail.com", phone: "380957654391", IdCard: true },
];

for (const person of users) { console.log(`${person.firstName} ${person.lastName} - email:${person.email}; phone:${person.phone}; IDCard:${person.IdCard}`);
};

for (const { firstName, lastName, email, phone, IdCard } of users) {
    console.log(`${firstName} ${lastName} - email:${email}; phone:${phone}; IDCard:${IdCard}`);
}