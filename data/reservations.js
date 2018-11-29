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

exports.reservations = reservations;

exports.addReservation = function (reservation) {
    reservations.push(reservation);
}