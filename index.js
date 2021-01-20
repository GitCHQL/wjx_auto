const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium','firefox','webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://ks.wjx.top/jq/104477328.aspx');
    await page.click('[id=q1]')
    await page.keyboard.insertText('测试');
    await page.click('[id=q2]')
    await page.keyboard.insertText('测试223');
    await page.click('[id=q3]')
    await page.keyboard.insertText('测试');
    await page.click('[id=q4]')
    await page.keyboard.insertText('测试334');
    await page.click('text = 苏沪',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q6_2]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q7_1]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q8_1]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q9_2]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q10_1]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q11_2]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q12_2]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q13_1]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q14_1]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q15_2]',{clickCount:2,delay:100+RandomTime()});
    await page.click('[for=q16_1]',{clickCount:2,delay:100+RandomTime()});
    await page.click('text =A、用手或身体其它部位接触机架的活动间隙结构及运动部位',{clickCount:1,delay:100+RandomTime()});
    await page.click('text =B、用手或身体其它部位接触皮带机的皮带、滚筒等运动部件',{clickCount:1,delay:100+RandomTime()});
    await page.click('text =C、清理皮带机滚筒上的杂物清洁、润滑皮带机',{clickCount:1,delay:100+RandomTime()});
    await page.click('text =D、用手调校、测量皮带机零件',{clickCount:1,delay:100+RandomTime()});
    await page.click('[class=submitbutton]',{clickCount:1,delay:100});
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
  }
})();

function RandomTime(timeRange = 500){
  return Math.random()*timeRange;
}
