var poker_card_properties = {

    Suit: {
        Clubs: 1,
        Diamonds: 2,
        Hearts: 3,
        Spades: 4,
    },

    Rank: {
        Ace: 1,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 11,
        Queen: 12,
        King: 13,
    }
};

function poker_card(rank, suit) {

    var _rank = rank;
    var _suit = suit;

    this.suit = function() {
        return suit;
    }

    this.rank = function() {
        return rank;
    }
}

function PokerCard(rank, suit) {
    var _rank = !rank ? poker_card_properties.Rank.Ace : rank;
    var _suit = !suit ? poker_card_properties.Suit.Clubs : suit;

    this.rank = function() {
        return _rank;
    }

    this.suit = function() {
        return _suit;
    }
}



