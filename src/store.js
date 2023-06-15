import { reactive } from "vue";

export const store = reactive({
    pagesList: ['Home', 'Rates', 'Testimonials', 'FAQ', 'Blog', 'Contact'],
    solutions: [{
        image: 'src/assets/img/movers/avada-movers-serviceonephoto-final-200x128.jpg',
        title: 'Two Man Teams'
    },
    {
        image: 'src/assets/img/movers/avada-movers-servicethreephoto-final-200x128.jpg',
        title: 'We Do All The Lifting'
    },
    {
        image: 'src/assets/img/movers/avada-movers-servicetwophoto-final-200x128.jpg',
        title: 'Coast To Coast'
    }
    ],
    moversList: ['Home', 'Rates', 'Testimonials', 'Blog', 'Free Quote'],
    posts: ['Heading Out To College?', 'Moving Your Business?', 'Outstanding Quality', 'Cost Of Moving', 'Best Moving Tips'],
    testimonials: [{
        image: 'src/assets/img/movers/avada-movers-johndoe-final-200x200.jpg',
        name: 'John Doe'
    },
    {
        image: 'src/assets/img/movers/avada-movers-janedoe-final-200x200.jpg',
        name: 'Jane Doe'
    },
    {
        image: 'src/assets/img/movers/avada-movers-johnsmith-final-200x200.jpg',
        name: 'John Smith'
    }
    ]
})