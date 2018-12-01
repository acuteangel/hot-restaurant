var reservations = [{
        name: 'Angel',
        phone: '123-345-567',
        email: 'angel@gmail.com',
    },
    {
        name: 'German',
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
