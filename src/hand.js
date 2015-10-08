var poker_hand_properties = {

    Type: {
        HighCard: 1, // Five cards which do not form any of the combinations below
        Pair: 2, // A hand with two cards of equal rank and three cards which are different from these and from each other
        TwoPairs: 3, // A hand with two pairs of different ranks
        ThreeOfAKind: 4, // Three cards of the same rank plus two unequal cards
        Straight: 5, // Five cards of mixed suits in sequence
        Flush: 6, // Five cards of the same suit
        FullHouse: 7, // Three cards of one rank and two cards of another rank
        FourOfAKind: 8, // Four cards of the same rank and the fifth card can be anything
        StraightFlush: 9 // Five cards of the same suit in sequence
    }
};

var PokerHand = function(cards) {

    //order the cards Ace -> King
    cards.sort(this._card_sort_function);

    // Save the cards
    this._cards = cards;
    this._type = this._evaluator_function();
};


// Evaluate this hand
PokerHand.prototype._evaluator_function = function() {

    var cards = this.cards();

    //count how many times a given rank appears
    var handType = this._count_pairs_function(cards);

    //see if the hand is a straight or a flush.
    if (handType === poker_hand_properties.Type.HighCard) {

        isStraight = this._check_straight_function(cards);
        isFlush = this._check_flush_function(cards);

        if (isStraight && isFlush) {
            handType = poker_hand_properties.Type.StraightFlush;
        }
        if (isStraight && !isFlush) {
            handType = poker_hand_properties.Type.Straight;
        }
        if (!isStraight && isFlush) {
            handType = poker_hand_properties.Type.Flush;
        }
    }

    return handType;
};

PokerHand.prototype._card_sort_function = function(a, b) {
    if (a.rank() < b.rank()) {
        return -1;
    }
    if (a.rank() > b.rank()) {
        return 1;
    }
    // a must be equal to b
    return 0;
};

PokerHand.prototype._count_pairs_function = function(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].rank()] = (obj[arr[i].rank()] || 0) + 1;
    }

    var occurs = 0;

    for (var card in obj) {
        if (obj[card] > occurs) {
            occurs = obj[card];
        }
    }

    if (occurs === 1) {
        return poker_hand_properties.Type.HighCard;
    } else if (occurs === 2) {
        return Object.keys(obj).length <= 3 ? poker_hand_properties.Type.TwoPairs : poker_hand_properties.Type.Pair;
    } else if (occurs === 3) {
        return Object.keys(obj).length <= 2 ? poker_hand_properties.Type.FullHouse : poker_hand_properties.Type.ThreeOfAKind;
    } else if (occurs === 4) {
        return poker_hand_properties.Type.FourOfAKind;
    }
};

PokerHand.prototype._check_flush_function = function(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].suit()] = (obj[arr[i].suit()] || 0) + 1;
    }

    return 1 == Object.keys(obj).length;
};

PokerHand.prototype._check_straight_function = function(arr) {
    for (var i = 0; i < 4; i++) {
        var a = arr[i]; // arr[0..3]
        var b = arr[i + 1]; // arr[1..4]
        if (!(a.rank() + 1 == b.rank())) {
            return false; // Not sequential
        }
    };
    return true;
};


PokerHand.prototype.cards = function() {
    return this._cards;
};

PokerHand.prototype.type = function() {
    return this._type;
};