class CustomActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return `systems/basic-foundry-system/templates/sheets/character-sheet.html`;
  }

  /** @override */
  getData() {
    const data = super.getData();
    // Additional data processing can go here.
    return data;
  }
}

Hooks.on("ready", () => {
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("basic-foundry-system", CustomActorSheet, { makeDefault: true });
});

