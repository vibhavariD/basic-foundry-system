class CustomActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return `systems/my-custom-system/templates/sheets/character-sheet.html`;
  }

  /** @override */
  getData() {
    const data = super.getData();
    return data;
  }
}

Hooks.on("ready", () => {
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("my-custom-system", CustomActorSheet, { makeDefault: true });
});

