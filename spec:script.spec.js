describe("getRandomQuote", function() {
  it("should return a quote object with text and author properties", function(done) {
    getRandomQuote().then(function(quote) {
      expect(quote).toBeDefined();
      expect(quote).toHaveProperty("text");
      expect(quote).toHaveProperty("author");
      done();
    });
  });
});

describe("displayQuote", function() {
  it("should display the quote text and author in the DOM", function() {
    var quote = { text: "Test quote", author: "Test author" };
    displayQuote(quote);
    expect(document.querySelector("#quote-text").textContent).toBe("Test quote");
    expect(document.querySelector("#quote-author").textContent).toBe("Test author");
  });
});