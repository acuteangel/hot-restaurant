var reservations = [{
        name: 'Angel 1',
        phone: '123-345-567',
        email: 'angel@gmail.com',
    },
    {
        name: 'German 2',
        phone: '123-345-567',
        email: 'German@gmail.com',
    },
    {
        name: '3',
        phone: '123-345-567',
        email: 'angel@gmail.com',
    },
    {
        name: '4',
        phone: '123-345-567',
        email: 'German@gmail.com',
    },
    {
        name: '5',
        phone: '123-345-567',
        email: 'German@gmail.com',
    }
];

var waitlist = [{
    name: 'Lynn',
    phone: '123-345-567',
    email: 'lynntfuzz@gmail.com',
},
{
    name: 'Puffin',
    phone: '123-345-567',
    email: 'puffin@gmail.com',
}
];

exports.reservations = reservations;
exports.waitlist = waitlist;

exports.addReservation = function (reservation) {
    if (reservations.length < 5)
        reservations.push(reservation);
    else waitlist.push(reservation);
}
