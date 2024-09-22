let size = "//div[contains(@itemprop, 'offers')]//div[contains(@class, 'ptions')]//child::div[contains(@class, 'ption')]/label";

const result = document.evaluate(
    size,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
);

for (let i =0; i < result.snapshotLength; i++) {
    const node = result.snapshotItem(i);
    console.log(node.textContent);
}

// trm
normalize-space(string)
//item[normalize-space()]
normalize-space(//span[1])



//div[@class='header']
//h1[text()='Welcome']
//*[@id='container']

// xpath axes
//h1/ancestor::div
//div/child::p
//div/descendant::span
//div[contains(@class, 'menu')]
//input[starts-with(@name, 'user')]
//li[position()=1]
//div[@class='main' and @id='content']
//div[@class='main-content' and @id='content']
//div[@class='header' or @class='footer']
//button[contains(@class, 'submit')]
//input[starts-with(@id, 'user_')]
//ul/li[1]   // First <li> element
//ul/li[last()]   // Last <li> element
//div[@class='item'][position()=3]
//h2/following-sibling::p[1]
//span[@class='highlight']/parent::div
//a[@class='link']/ancestor::div
//div[@class='current']/preceding-sibling::div
//div[@class='main']/descendant::a
//table[@id='customers']/tbody/tr[5]
//div[@data-info='{"name":"John"}']
