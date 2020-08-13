//get Bulletpoints
getBulletpoints = (text) => {
    return text.split("\n").map((x) => x.replace(/•\s/g,'').trim()).filter(Boolean).map((x) => `${"• "} ${x}\n`).join("\n");
}