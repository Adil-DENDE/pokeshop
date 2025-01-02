export class Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    weight: number;
    isDefault: boolean;
    abilities: Ability[];
    cries: Cries;
    locationAreaEncounters: string;
    species: Species;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];

    constructor(data: Pokemon) {
        this.id = data.id;
        this.name = data.name;
        this.baseExperience = data.baseExperience;
        this.height = data.height;
        this.weight = data.weight;
        this.isDefault = data.isDefault;
        this.abilities = data.abilities;
        this.cries = data.cries;
        this.locationAreaEncounters = data.locationAreaEncounters;
        this.species = data.species;
        this.sprites = data.sprites;
        this.stats = data.stats;
        this.types = data.types;
    }

    getSprite(): string | null {
        return this.sprites.front_default;
    }

    getTypes(): string[] {
        return this.types.map(type => type.type.name);
    }

    getAbilities(): string[] {
        return this.abilities.map(ability => ability.ability.name);
    }
}

interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface Cries {
    latest: string;
    legacy: string;
}

interface Species {
    name: string;
    url: string;
}

interface Sprite {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface NotFullDataPokemon {
    name: string
    url: string
}