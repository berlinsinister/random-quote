const quotes = [
    {
        quote: 'The only person you are destined to become is the person you decide to be.',
        author: 'Ralph Waldo Emerson'
    },

    {
        quote: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
        author: 'Vincent Van Gogh'
    },

    {
        quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
        author: 'Oprah Winfrey'
    },

    {
        quote: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
        author: 'Maya Angelou'
    },

    {
        quote: 'The mind is everything. What you think you become.',
        author: 'Buddha'
    },

    {
        quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
        author: 'Joshua J. Marine'
    },

    {
        quote: 'We become what we think about.',
        author: 'Earl Nightingale'
    }
];

let lightgreen = '#2e8364';
let lightcoral = '#e17e76';
let lightgrey = '#cccccc';
let crimson = '#a02c2d';
let teal = '#38908f';
let purple = '#9dabdd';
let winepurple = '#ab6393';

const colors = ['lightgreen', 'lightcoral', 'lightgrey', 'crimson', 'teal', 'purple', 'winepurple'];
const txtColors = [lightgreen, lightcoral, lightgrey, crimson, teal, purple, winepurple];
let i = 0; // index

$(document).ready(function () {

    // on page load
    const quotation = '<i class="fa fa-quote-left"></i> ';
    $('body').addClass(colors[i]);
    $('#text').html(quotation + quotes[i].quote);
    $('#text').css('color', txtColors[i]);
    $('#author').html('- ' + quotes[i].author);
    $('#author').css('color', txtColors[i]);
    $('.social').addClass(colors[i]);
    $('button').addClass(colors[i]);

    // starting clicking
    $('button').click(function () {
        change();
    });
});

function change() {
    i++;
    if (i == quotes.length) {
        i = 0;
        $('body').removeClass(colors[colors.length - 1]);
        $('.social').removeClass(colors[colors.length - 1]);
        $('button').removeClass(colors[colors.length - 1]);
    }

    // facde body
    $('body').addClass(colors[i]);
    $('body').removeClass(colors[i - 1]);

    // fade text
    const quotation = '<i class="fa fa-quote-left"></i> ';
    $('#text').fadeTo('slow', 0.0);
    setTimeout(() => {
        $('#text').html(quotation + quotes[i].quote);
        $('#text').css('color', txtColors[i]);
        $('#text').fadeTo('slow', 1.0);
    }, 500);

    // fade author
    $('#author').fadeTo('slow', 0.0);
    setTimeout(() => {
        $('#author').html('- ' + quotes[i].author);
        $('#author').css('color', txtColors[i]);
        $('#author').fadeTo('slow', 1.0);
    }, 500);

    // fade socials
    $('.social').addClass(colors[i]);
    $('.social').removeClass(colors[i - 1]);


    // fade button
    $('button').addClass(colors[i]);
    $('button').removeClass(colors[i - 1]);
}