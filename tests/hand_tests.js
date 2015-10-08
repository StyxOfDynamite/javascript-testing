describe("Hand Tests", function() {

    it("Hands should be ordered correctly", function() {

        expect(poker_hand_properties.Type.HighCard).toBeLessThan(poker_hand_properties.Type.Pair);
        expect(poker_hand_properties.Type.Pair).toBeLessThan(poker_hand_properties.Type.TwoPairs);
        expect(poker_hand_properties.Type.TwoPairs).toBeLessThan(poker_hand_properties.Type.ThreeOfAKind);
        expect(poker_hand_properties.Type.ThreeOfAKind).toBeLessThan(poker_hand_properties.Type.Straight);
        expect(poker_hand_properties.Type.Straight).toBeLessThan(poker_hand_properties.Type.Flush);
        expect(poker_hand_properties.Type.Flush).toBeLessThan(poker_hand_properties.Type.FullHouse);
        expect(poker_hand_properties.Type.FullHouse).toBeLessThan(poker_hand_properties.Type.FourOfAKind);
        expect(poker_hand_properties.Type.FourOfAKind).toBeLessThan(poker_hand_properties.Type.StraightFlush);
    });

    it("When a hand is created the cards are stored in order", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Eight, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Ten, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Eight, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Ace, poker_card_properties.Suit.Clubs)]);

        var held_cards = hand.cards();

        // Cards should be in a specific order
        expect(held_cards[0].rank()).toEqual(poker_card_properties.Rank.Ace);
        expect(held_cards[1].rank()).toEqual(poker_card_properties.Rank.Four);
        expect(held_cards[2].rank()).toEqual(poker_card_properties.Rank.Eight);
        expect(held_cards[3].rank()).toEqual(poker_card_properties.Rank.Eight);
        expect(held_cards[4].rank()).toEqual(poker_card_properties.Rank.Ten);

        // Suits order equal ranks
        expect(held_cards[2].suit()).toEqual(poker_card_properties.Suit.Clubs);
        expect(held_cards[3].suit()).toEqual(poker_card_properties.Suit.Diamonds);
    });

    // Hand check - high card
    it("Hand checked - High Card", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Eight, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Ten, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.HighCard);
    });

    // Hand check - flush
    it("Hand checked - Flush", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Eight, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Ten, poker_card_properties.Suit.Clubs)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.Flush);
    });

    // Hand check - straight
    it("Hand checked - Straight", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Three, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Five, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.Straight);
    });

    // Hand check - straight (wheel)
    it("Hand checked - Straight (Wheel)", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Ace, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Three, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Five, poker_card_properties.Suit.Clubs)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.Straight);
    });

    // Hand check - straight flush
    it("Hand checked - Straight (Flush)", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Three, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Five, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.StraightFlush);
    });

    // Hand check - four of a kind
    it("Hand checked - Four of a Kind", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.FourOfAKind);
    });

    // Hand check - full house
    it("Hand checked - Full House", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.FullHouse);
    });

    // Hand check - three of a kind
    it("Hand checked - Three of a Kind", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Seven, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.ThreeOfAKind);
    });

    // Hand check - two pairs
    it("Hand checked - Two Pairs", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Seven, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.TwoPairs);
    });

    // Hand check - pair
    it("Hand checked - Pair", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Six, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Seven, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.King, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.Pair);
    });

        // Hand check - almost a straight
    it("Hand checked - High Card (With Sequence)", function() {

        var hand = new PokerHand([
            new PokerCard(poker_card_properties.Rank.Two, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Three, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Four, poker_card_properties.Suit.Diamonds),
            new PokerCard(poker_card_properties.Rank.Five, poker_card_properties.Suit.Clubs),
            new PokerCard(poker_card_properties.Rank.Seven, poker_card_properties.Suit.Diamonds)]);

        var result = hand.type();
        expect(result).toEqual(poker_hand_properties.Type.HighCard);
    });
});

