db.orders.insertMany(
    [
        {
            products:[
                {
                    product_id:ObjectId("64133e540c29147e15ba0a64"),
                    quantity:2
                },
                {
                    product_id:ObjectId("64133ef10c29147e15ba0a68"),
                    quantity:1
                }
            ],
            client:ObjectId("64193742293d0a98034ebc85")
        },
        {
            products:[
                {
                    product_id:ObjectId("64133e540c29147e15ba0a65"),
                    quantity:1
                },
            ],
            client:ObjectId("64193742293d0a98034ebc87")
        },
        {
            products:[
                {
                    product_id:ObjectId("64133e540c29147e15ba0a64"),
                    quantity:2
                },
                {
                    product_id:ObjectId("64133ef10c29147e15ba0a68"),
                    quantity:3
                },
                {
                    product_id:ObjectId("64133e540c29147e15ba0a65"),
                    quantity:8
                }
            ],
            client:ObjectId("64193742293d0a98034ebc87")
        }
    ]
    )
db.orders.aggregate(
    [
        {
            $lookup:{
                from:"clients",
                localField:"client",
                foreignField:"_id",
                as:"client_details"
            }
        },
        {
            $lookup:{
                from:"products",
                localField:"products.product_id",
                foreignField:"_id",
                as:"products_details"
            }
        },
        {
            $project:{
                _id:1,
                client_details:1,
                products:1,
                products_detials:1
            }
        }
    ]
    )
    db.empleados.insertMany([
        {
            _id: 4,
            nombre: "María",
            apellido: "Hernández",
            idioma: "Español",
            puesto: "Asistente",
            edad: 38,
            empresa: "Batz Inc"
        },
        {
            _id: 1,
            nombre: "David",
            apellido: "Juárez",
            edad: 38,
            idioma: "Ruso",
            puesto: "Diseñador Web",
            empresa: "Leuschke and Strosin"
        },
        {
            _id: 2,
            nombre: "Cecilia",
            apellido: "Herrera",
            edad: 20,
            idioma: "Alemán",
            puesto: "Help Desk Technician",
            email: "herrera@correo.com",
            empresa: "O'Kon Inc."
        },
        {
            _id: 6,
            nombre: "Emma",
            apellido: "Rodríguez",
            edad: 19,
            idioma: "Francés",
            puesto: "GIS Technical Architect",
            email: "emmar@correo.com",
            empresa: "Kohler and Sons"
        }
    ])