import { container, DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

class Mod implements IPostDBLoadMod
{
    private modConfig = require("../config/config.json");
    public postDBLoad(container: DependencyContainer): void 
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        
        const dB = databaseServer.getTables();
        const items = dB.templates.items;
        const config = this.modConfig;
        //const globals = dB.globals.config;
        for (const id in items)
        {
            const base = items[id]
            if (base._parent.includes("5485a8684bdc2da71d8b4567"))
            {
                const str = base._name.split("_", 2)
                if (str[1] == "9x19" || str[1] == "9x18pm" || str[1] == "9x21" || str[1] == "762x25tt" || str[1] == "46x30" || str[1] == "57x28" || str[1] == "1143x23" || str[1] == "9x33r")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.PistolRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[1] == "12x70" || str[1] == "20x70" || str[1] == "23x75")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.ShotgunRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[1] == "762x39" || str[1] == "545x39" || str[1] == "556x45" || str[1] == "9x39" || str[1] == "366" || str[1] == "762x35" || str[1] == "300blk" || str[1] == "ATL15")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.RifleRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[1] == "762x51" || str[1] == "762х54R" || str[1] == "762x54r" || str[1] == "86x70" || str[1] == "127x55")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.MarksmanRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                //KMC
                if (str[2] == "10MM" || str[2] == "40SW" || str[2] == "357SIG" || str[2] == "9MM" || str[2] == "45ACP" || str[2] == "50AE" || str[2] == "380AUTO")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.PistolRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "GRENDEL" || str[2] == "50WLF")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.RifleRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "BMG" || str[2] == "277")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.MarksmanRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
                if (str[2] == "KURZ")
                {
                    editSimpleItemData(id, "StackMaxSize", config.Items.AmmoStacks.RifleRound)
                    editSimpleItemData(id, "Weight", config.Items.AmmoStacks.Weight)
                }
            }
        }
        /*
        // AMMO
        if (config.stacks.x1270Shots.enabled === true)
        {
            // Stack Modification
            items["5d6e68a8a4b9360b6c0d54e2"]._props.StackMaxSize = config.stacks.x1270Shots.stackLimit; // AP SLUG
            items["5d6e68c4a4b9361b93413f79"]._props.StackMaxSize = config.stacks.x1270Shots.stackLimit; // 12/70 makeshift .50 BMG slug
            // Weight Modification
            items["5d6e68a8a4b9360b6c0d54e2"]._props.Weight = config.stacks.global.weight; // AP SLUG
            items["5d6e68c4a4b9361b93413f79"]._props.Weight = config.stacks.global.weight; // 12/70 makeshift .50 BMG slug
        }

        if (config.stacks.x19mmRounds.enabled === true)
        {
            // Stack Modification
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.x19mmRounds.stackLimit; // 9x19mm PST gzh
            items["5efb0da7a29a85116f6ea05f"]._props.StackMaxSize = config.stacks.x19mmRounds.stackLimit; // 9x19mm PBP gzh
            // Weight Modification
            items["56d59d3ad2720bdb418b4577"]._props.Weight = config.stacks.global.weight; // 9x19mm PST gzh
            items["5efb0da7a29a85116f6ea05f"]._props.Weight = config.stacks.global.weight; // 9x19mm PBP gzh
        }

        if (config.stacks.x556mmRounds.enabled === true)
        {
            // Stack Modification
            items["54527ac44bdc2d36668b4567"]._props.StackMaxSize = config.stacks.x556Rounds.stackLimit; // 5.56x45mm M855A1
            items["59e6906286f7746c9f75e847"]._props.StackMaxSize = config.stacks.x556Rounds.stackLimit; // 5.56x45mm M856A1
            items["59e690b686f7746c9f75e848"]._props.StackMaxSize = config.stacks.x556Rounds.stackLimit; // 5.56x45mm M995
            // Weight Modification
            items["54527ac44bdc2d36668b4567"]._props.Weight = config.stacks.global.weight; // 5.56x45mm M855A1
            items["59e6906286f7746c9f75e847"]._props.Weight = config.stacks.global.weight; // 5.56x45mm M856A1
            items["59e690b686f7746c9f75e848"]._props.Weight = config.stacks.global.weight; // 5.56x45mm M995
        }

        if (config.stacks.x762x51Rounds.enabled === true)
        {
            // Stack Modification
            items["5a6086ea4f39f99cd479502f"]._props.StackMaxSize = config.stacks.x762x51Rounds.stackLimit; // 7.62x51mm M61
            items["5a608bf24f39f98ffc77720e"]._props.StackMaxSize = config.stacks.x762x51Rounds.stackLimit; // 7.62x51mm M62
            items["58dd3ad986f77403051cba8f"]._props.StackMaxSize = config.stacks.x762x51Rounds.stackLimit; // 7.62x51mm M80
            // Weight Modification
            items["5a6086ea4f39f99cd479502f"]._props.Weight = config.stacks.global.weight; // 7.62x51mm M61
            items["5a608bf24f39f98ffc77720e"]._props.Weight = config.stacks.global.weight; // 7.62x51mm M62
            items["58dd3ad986f77403051cba8f"]._props.Weight = config.stacks.global.weight; // 7.62x51mm M80
        }

        if (config.stacks.x545x39Rounds.enabled === true)
        {
            // Stack Modification
            items["5c0d5e4486f77478390952fe"]._props.StackMaxSize = config.stacks.x545x39Rounds.stackLimit; // 5.45x39mm PPBS gs "Igolnik"
            items["56dff026d2720bb8668b4567"]._props.StackMaxSize = config.stacks.x545x39Rounds.stackLimit; // 5.45x39mm BS gs
            // Weight Modification
            items["5c0d5e4486f77478390952fe"]._props.Weight = config.stacks.global.weight; // 5.45x39mm PPBS gs "Igolnik"
            items["56dff026d2720bb8668b4567"]._props.Weight = config.stacks.global.weight; // 5.45x39mm BS gs
        }

        if (config.stacks.x762x39Rounds.enabled === true)
        {
            // Stack Modification
            items["59e0d99486f7744a32234762"]._props.StackMaxSize = config.stacks.x762x39Rounds.stackLimit; // 7.62x39mm BP gzh
            items["601aa3d2b2bcb34913271e6d"]._props.StackMaxSize = config.stacks.x762x39Rounds.stackLimit; // 7.62x39mm MAI AP
            // Weight Modification
            items["59e0d99486f7744a32234762"]._props.Weight = config.stacks.global.weight; // 7.62x39mm BP gzh
            items["601aa3d2b2bcb34913271e6d"]._props.Weight = config.stacks.global.weight; // 7.62x39mm MAI AP
        }

        if (config.stacks.x46x30Rounds.enabled === true)
        {
            // Stack Modification
            items["5ba26844d4351e00334c9475"]._props.StackMaxSize = config.stacks.x46x30Rounds.stackLimit; // 4.6x30mm Subsonic SX
            items["5ba26835d4351e0035628ff5"]._props.StackMaxSize = config.stacks.x46x30Rounds.stackLimit; // 4.6x30mm AP SX
            // Weight Modification
            items["5ba26844d4351e00334c9475"]._props.Weight = config.stacks.global.weight; // 4.6x30mm Subsonic SX
            items["5ba26835d4351e0035628ff5"]._props.Weight = config.stacks.global.weight; // 4.6x30mm AP SX
        }
*/
        // CURRENCY
        if (config.Items.currency.enabled === true)
        {
            // Stack Modification
            items["5449016a4bdc2d6f028b456f"]._props.StackMaxSize = config.Items.currency.stackLimit; // Roubles
            items["5696686a4bdc2da3298b456a"]._props.StackMaxSize = config.Items.currency.stackLimit; // Dollars
            items["569668774bdc2da2298b4568"]._props.StackMaxSize = config.Items.currency.stackLimit; // Euros
        }
        
        // VALUEABLES
        if (config.Items.valueables.enabled === true)
        {
            // Stack Modification
            items["59faff1d86f7746c51718c9c"]._props.StackMaxSize = config.Items.valueables.stackLimit; // Bitcoin
            items["5d235b4d86f7742e017bc88a"]._props.StackMaxSize = config.Items.valueables.stackLimit; // GP Coin
        }
        function editSimpleItemData(id, data, value)
        {
            if (isNaN(value) && value !== "true" && value !== "false")
            {
                items[id]._props[data] = value
            }
            else
            {
                items[id]._props[data] = JSON.parse(value)
            }
        }
    }
}
// Logging to console for successful injection
const logger = container.resolve<ILogger>("WinstonLogger");

logger.logWithColor("LOADING: BRAMMERN BIGGER STACKS 0.1.2",LogTextColor.YELLOW);


module.exports = { mod: new Mod() }