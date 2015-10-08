describe("Card Tests", function() {

    it("Suits should be ordered correctly", function() {

        expect(poker_card_properties.Suit.Clubs).toBeLessThan(poker_card_properties.Suit.Diamonds);
        expect(poker_card_properties.Suit.Diamonds).toBeLessThan(poker_card_properties.Suit.Hearts);
        expect(poker_card_properties.Suit.Hearts).toBeLessThan(poker_card_properties.Suit.Spades);
    });

    it("Ranks should be ordered correctly", function() {

        expect(poker_card_properties.Rank.Two).toBeLessThan(poker_card_properties.Rank.Three);
        expect(poker_card_properties.Rank.Three).toBeLessThan(poker_card_properties.Rank.Four);
        expect(poker_card_properties.Rank.Four).toBeLessThan(poker_card_properties.Rank.Five);
        expect(poker_card_properties.Rank.Five).toBeLessThan(poker_card_properties.Rank.Six);
        expect(poker_card_properties.Rank.Six).toBeLessThan(poker_card_properties.Rank.Seven);
        expect(poker_card_properties.Rank.Seven).toBeLessThan(poker_card_properties.Rank.Eight);
        expect(poker_card_properties.Rank.Eight).toBeLessThan(poker_card_properties.Rank.Nine);
        expect(poker_card_properties.Rank.Nine).toBeLessThan(poker_card_properties.Rank.Ten);
        expect(poker_card_properties.Rank.Ten).toBeLessThan(poker_card_properties.Rank.Jack);
        expect(poker_card_properties.Rank.Jack).toBeLessThan(poker_card_properties.Rank.Queen);
        expect(poker_card_properties.Rank.Queen).toBeLessThan(poker_card_properties.Rank.King);
    });

    it("Ace ranked lowest", function() {

        expect(poker_card_properties.Rank.Ace).toBeLessThan(poker_card_properties.Rank.Two);
    });

    it("Default card created as Ace of Clubs", function() {

        var card1 = new PokerCard();

        expect(card1.rank()).toEqual(poker_card_properties.Rank.Ace);
        expect(card1.suit()).toEqual(poker_card_properties.Suit.Clubs);
    });

    it("User created card uses correct properties", function() {

        var card1 = new PokerCard(poker_card_properties.Rank.Ten, poker_card_properties.Suit.Hearts);

        expect(card1.rank()).toEqual(poker_card_properties.Rank.Ten);
        expect(card1.suit()).toEqual(poker_card_properties.Suit.Hearts);
    });
});

