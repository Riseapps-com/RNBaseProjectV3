const byId = id => element(by.id(id))
const byText = text => element(by.text(text))
const byLabel = label => element(by.label(label))
const byType = type => element(by.type(type))
const byTraits = traits => element(by.traits(traits))

const sleep = ms => new Promise(res => setTimeout(res, ms))

export { byId, byText, byLabel, byType, byTraits, sleep }
