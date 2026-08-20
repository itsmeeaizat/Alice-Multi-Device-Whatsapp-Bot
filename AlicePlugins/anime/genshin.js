// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['gens-wildlife', 'gens-weapons', 'gens-voiceovers', 'gens-viewpoint', 'gens-talents', 'gens-potion', 'gens-outfit', 'gens-nation', 'gens-namacard', 'gens-materials', 'gens-food', 'gens-enemy', 'gens-emoji', 'gens-domain', 'gens-craft', 'gens-giconstellation', 'gens-giartifact', 'gens-area', 'gens-animals', 'gens-advrank', 'gens-giachievement', 'gens-characters'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'gens-wildlife': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} snowboar*\nHarap berikan nama binatang liar.`);
  try {
    let result = await genshindb.wildlife(text);
    if (result) {
      let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Habitat:* ${result.habitat || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Binatang liar tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.wildlife("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-weapons': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: *${AliceCmd} claymore*\nHarap berikan nama senjata.`);
  try {
    let result = await genshindb.weapons(text);
    if (result) {
      let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Type:* ${result.type || "Data tidak tersedia"}\n` + `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "");
      reply(response);
    } else {
      reply("Senjata tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.weapons("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-voiceovers': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${AliceCmd} venti*\nHarap berikan nama voiceover.`);
  try {
    let result = await genshindb.voiceovers(text);
    if (result) {
      let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Voiceover tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.voiceovers("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-viewpoint': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} starfell valley*\nHarap berikan nama pemandangan.`);
  try {
    let result = await genshindb.viewpoints(text);
    if (result) {
      let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}`;
      reply(response);
    } else {
     reply("Pemandangan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.viewpoints("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-talents': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`);
  try {
    let result = await genshindb.talents(text);
    if (result && result.length > 0) {
      let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((talent, index) => {
        response += `*${index + 1}. ${talent.name}*\n`;
        response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
        response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`;
        response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`;
      });
      reply(response);
    } else {
     reply(`Bakat untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`);
  }
};
break

case 'gens-potion': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Efek:* ${result.effect || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply(`Ramuan atau makanan '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      reply(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
    }
  }
};
break

case 'gens-outfit': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} outrider*\nHarap berikan nama kostum atau outfit.`);
  try {
    let result = await genshindb.outfits(text);
    if (result) {
      let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Karakter:* ${result.character || "Data tidak tersedia"}`;
      if (result.url && result.url.modelviewer) {
        response += `\n_${result.url.modelviewer}_`;
      }
      reply(response);
    } else {
     reply(`Kostum '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableOutfits = await genshindb.outfits(text, {
        matchCategories: true
      });
      reply(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableOutfits = await genshindb.outfits("names", {
        matchCategories: true
      });
      reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
    }
  }
};
break

case 'gens-nation': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: *${AliceCmd} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Informasi wilayah tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-namacard': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} anemo flare*\nHarap berikan nama kartu nama.`);
  try {
    let result = await genshindb.namecards(text);
    if (result) {
      let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Unlock:* ${result.unlock || "Data tidak tersedia"}`;
      reply(response);
    } else {
     reply("Kartu nama tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.namecards("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-materials': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} boreal wolf's milk*\nHarap berikan nama material.`);
  try {
    let result = await genshindb.materials(text);
    if (result) {
      let response = `*Material Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Material tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.materials("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-food': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} temptation*\nHarap berikan nama makanan.`);
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_"${result.description}"_\n\n`;
      response += `*Rarity:* ${result.rarity}\n`;
      response += `*Type:* ${result.foodtype}\n`;
      response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
      if (result.effect) {
        response += `*Effect:*\n${result.effect}\n\n`;
      }
      if (result.suspicious) {
        response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
      }
      if (result.normal) {
        response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
      }
      if (result.delicious) {
        response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
      }
      reply(response);
    } else {
      reply("Makanan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.foods("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-enemy': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${AliceCmd} ruin guard*\nHarap berikan nama musuh.`);
  try {
    let result = await genshindb.enemies(text);
    if (result) {
      let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Element:* ${result.element || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Musuh tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.enemies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-emoji': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} anemo*\nHarap berikan nama emoji.`);
  try {
    let result = await genshindb.emojis(text);
    if (result) {
      let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Emoji tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.emojis("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-domain': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} valley of remembrance*\nHarap berikan nama domain.`);
  try {
    let result = await genshindb.domains(text);
    if (result) {
      let response = `*Domain Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Domain tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.domains("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-craft': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} mystical enhancement ore*\nHarap berikan nama craft.`);
  try {
    let result = await genshindb.crafts(text);
    if (result) {
      let response = `*Craft Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Craft tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.crafts("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-giconstellation': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`);
  try {
    let result = await genshindb.constellations(text);
    if (result && result.length > 0) {
      let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((constellation, index) => {
        response += `*${index + 1}. ${constellation.name}*\n`;
        response += `_${constellation.effect}_\n\n`;
        response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`;
        if (index < result.length - 1) response += "\n\n";
      });
      reply(response);
    } else {
      reply(`Konstelasi untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`);
  }
};
break

case 'gens-giartifact': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${AliceCmd} berserker*\nHarap berikan nama artefak.`);
  try {
    let result = await genshindb.artifacts(text);
    if (result) {
      let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Set:* ${result.set || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Slot:* ${result.slot || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Artefak tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.artifacts("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-area': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: *${AliceCmd} liyue*\nHarap berikan nama tempat.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Info Geografi: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Geografi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-animals': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${AliceCmd} shiba*\nHarap berikan nama hewan.`);
  try {
    let animal = await genshindb.animals(text);
    if (animal) {
      let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
      response += `"${animal.description}"\n\n`;
      response += `*Kategori:* ${animal.category || ""}\n`;
      response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
      response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
      reply(response);
    } else {
      reply("Hewan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    try {
      let animalCategories = await genshindb.animals(text, {
        matchCategories: true
      });
      reply(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let allAnimalNames = await genshindb.animals("names", {
        matchCategories: true
      });
      reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
    }
  }
};
break

case 'gens-advrank': {
if (isBan) return XRB()
await XReaction()
    if (!text || isNaN(parseInt(text))) {
      return reply(`Masukkan nomor peringkat petualang yang valid. Contoh: *${AliceCmd} 5*`);
    }
    try {
    let rankNumber = parseInt(text);
    let result = await genshindb.adventureranks(rankNumber);
    if (result) {
      let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
      response += `*Experience:* ${result.exp || "Data tidak tersedia"}\n`;
      response += `*Reward:* ${result.reward || "Data tidak tersedia"}\n`;
      response += `*Deskripsi:* ${result.description || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    let availableRanks = await genshindb.adventureranks("names");
    reply(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
  }
};
break

case 'gens-giachievement': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply( `Contoh: *${AliceCmd} mondstadt*\nHarap berikan nama prestasi.`);
  try {
    let result = await genshindb.achievements(text);
    if (result) {
      let response = `*${result.name}*\n`;
      response += `_${result.description}_\n\n`;
      response += `*Kategori:* ${result.category || ""}\n`;
      response += `*Rarity:* ${result.rarity || ""}\n`;
      response += `*Detail:* ${result.detail || ""}\n`;
      response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
      reply(response);
    } else {
      reply("Prestasi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.achievements("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-characters': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${AliceCmd} diluc*\nHarap berikan nama karakter.`);
  try {
    let result = await genshindb.characters(text);
    if (result) {
      let response = `*Karakter Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Vision:* ${result.vision || "Data tidak tersedia"}\n`;
      response += `*Senjata:* ${result.weapon || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Karakter tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.characters("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Karakter yang tersedia:* ${available.join(", ")}`);
  }
};
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Game Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Main Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
    }
  }
};
