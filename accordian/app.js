//https://scotch.io/courses/getting-started-with-vuejs/vue-events-building-an-accordion

const app = new Vue({
    el: '#app',
    data: {
        isOpen: true
    },
    methods: {
        toggleAccordion: function() {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        accordionClasses: function() {
            return {
                'is-closed': !this.isOpen,
                'is-primary': !this.isOpen,
                'is-dark': !this.isOpen
            };
        }
    }
})