export const sample_offers: any [] = [
    {
        id:'1',
        name:'Ghost home',
        type:'Normal',
        tags:['Normal','Poland'],
        price:400,
        country:'Poland',
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/offer/pk1.jfif',
        checkIn: new Date('22-Nov-2022'),
        checkOut: new Date('30-Nov-2022')
    },
    {
        id:'2',
        name:'Bombi home',
        type:'Special',
        tags:['Special','Poland'],
        price:600,
        country: 'Poland',
        favorite: true,
        stars: 5,
        imageUrl: 'assets/offer/pk2.jfif',
        checkIn: new Date('1-Nov-2022'),
        checkOut: new Date('6-Nov-2022')
    },
    {
        id:'3',
        name:'Batman home',
        type:'Poor',
        tags:['Poor','England'],
        price:200,
        country: 'England',
        favorite: false,
        stars: 1,
        imageUrl: 'assets/offer/pk3.jpg',
        checkIn: new Date('2-Nov-2022'),
        checkOut: new Date('6-Nov-2022')
    },
    {
        id:'4',
        name:'Superman home',
        type:'Deluxe',
        tags:['Deluxe','USA'],
        price:700,
        country:'USA',
        favorite: true,
        stars: 5,
        imageUrl: 'assets/offer/pk4.jpg',
        checkIn: new Date('10-Nov-2022'),
        checkOut: new Date('28-Nov-2022')
    },
    {
        id:'5',
        name:'Fhouse home',
        type:'Deluxe',
        tags:['Deluxe','Poland'],
        price:400,
        country:'Poland',
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/offer/pk5.jpg',
        checkIn: new Date('22-Nov-2022'),
        checkOut: new Date('30-Nov-2022')
    },
    {
        id:'6',
        name:'Tenesi home',
        type:'Normal',
        tags:['Normal','England'],
        price:100,
        country:'England',
        favorite: false,
        stars: 2.5,
        imageUrl: 'assets/offer/pk6.jpg',
        checkIn: new Date('12-Dec-2022'),
        checkOut: new Date('20-Dec-2022')
    },
    {
        id:'7',
        name:'Lion home',
        type:'Special',
        tags:['Special','Poland'],
        price:400,
        country:'Poland',
        favorite: true,
        stars: 5,
        imageUrl: 'assets/offer/pk7.jpg',
        checkIn: new Date('10-Dec-2022'),
        checkOut: new Date('23-Dec-2022')
    },
    {
        id:'8',
        name:'Mariot home',
        type:'Normal',
        tags:['Normal','USA'],
        price:600,
        country:'USA',
        favorite: false,
        stars: 2.5,
        imageUrl: 'assets/offer/pk3.jpg',
        checkIn: new Date('22-Dec-2022'),
        checkOut: new Date('30-Dec-2022')
    },
    {
        id:'9',
        name:'Aqua home',
        type:'Special',
        tags:['Special','Germany'],
        price:300,
        country:'Germany',
        favorite: false,
        stars: 3.5,
        imageUrl: 'assets/offer/pk4.jpg',
        checkIn: new Date('10-Dec-2022'),
        checkOut: new Date('30-Dec-2022')
    },
    {
        id:'10',
        name:'test home',
        type:'Special',
        tags:['Special','Germany'],
        price:300,
        country:'Germany',
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/offer/pk4.jpg',
        checkIn: new Date('10-Dec-2022'),
        checkOut: new Date('30-Dec-2022')
    },

]

export const sample_tags: any[] =[
    {
        name:'All', count:9
    },
    {
        name:'England', count:2
    },
    {
        name:'Poland', count:4
    },
    {
        name:'USA', count:2
    },
    {
        name:'Germany', count:1
    },
    {
        name:'Norway', count:0
    },
    
]

export const sample_menu: any [] =
[
    {
        name: 'Hamburger',
        type: 'Non Vegan',
        ingredient: ['Meet','rolls'],
        price: 10,
        image: 'assets/menu/hamburger.jpg',
        amount:1,
        tags: ['Non vegan','Fast food'],
    },
    {
        name: 'Hot-dog',
        type: 'Non Vegan',
        ingredient: ['Meet','rolls'],
        price: 4,
        image: 'assets/menu/hotdog.jpg',
        amount:1,
        tags: ['Non vegan','Fast food'],
    },
    {
        name: 'Coffee',
        type: 'Vegan',
        ingredient: ['black coffee'],
        price: 2,
        image: 'assets/menu/CL.jpg',
        amount:1,
        tags: ['Vegan','Drink'],
    },
    {
        name: 'Tee',
        type: 'Vegan',
        ingredient: ['Blue tee'],
        price: 3,
        image: 'assets/menu/ras.jpg',
        amount:1,
        tags: ['Vegan','Drink'],
    },
    {
        name: 'Salad',
        type: 'Vegan',
        ingredient: ['Salad','Potatoes'],
        price: 6,
        image: 'assets/menu/salad.jpg',
        amount:1,
        tags: ['Vegan'],
    },
    {
        name: 'Nuggets',
        type: 'Non-vegan',
        ingredient: ['nuggets','fries'],
        price: 10,
        image: 'assets/restaurant/nuggets.jpg',
        amount:1,
        tags: ['Non-vegan','Children'],
    },
    {
        name: 'Pasta',
        type: 'Vegan',
        ingredient: ['Pasta','Bolognesse'],
        price: 8,
        image: 'assets/restaurant/pasta.jpg',
        amount:1,
        tags: ['Non-vegan','Pasta'],
    },
]
export const sample_users: any[] =[
    {
        name: 'Kacper Kowal',
        email: 'kk@gmail.com',
        password:'12345',
        address: 'Raciborz',
        isAdmin: false,
    },
    {
        name: 'Kacper Szweda',
        email: 'barca@gmail.com',
        password:'12345',
        address: 'Swierklany',
        isAdmin: true,
    },
    
]