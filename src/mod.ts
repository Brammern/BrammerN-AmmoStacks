import { container, DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IPostDBLoadMod
{
    private modConfig = require("../config/config.json");
    public postDBLoad(container: DependencyContainer): void 
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        const items = tables.templates.items;
        const config = this.modConfig;

        // Allowing bigger ammo stacks
        if (config.stacks.apslug.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.apslug.stackLimit;
        }
        if (config.stacks.ninepst.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.ninepst.stackLimit;
        }
        if (config.stacks.m855a1.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.m855a1.stackLimit;
        }
        if (config.stacks.m856a1.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.m856a1.stackLimit;
        }
        if (config.stacks.m995.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.m995.stackLimit;
        }
        if (config.stacks.m61.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.m61.stackLimit;
        }
        if (config.stacks.m62.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.m62.stackLimit;
        }
        if (config.stacks.ignolik.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.ignolik.stackLimit;
        }
        if (config.stacks.bp_762x39.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.bp_762x39.stackLimit;
        }

        // CURRENCY STACKS INCREASEMENT
        if (config.stacks.roubles.enabled === true)
        {
            items["5449016a4bdc2d6f028b456f"]._props.StackMaxSize = config.stacks.roubles.stackLimit;
        }
        if (config.stacks.dollars.enabled === true)
        {
            items["5696686a4bdc2da3298b456a"]._props.StackMaxSize = config.stacks.dollars.stackLimit;
        }
        if (config.stacks.euros.enabled === true)
        {
            items["569668774bdc2da2298b4568"]._props.StackMaxSize = config.stacks.euros.stackLimit;
        }

        // Valueables stackable?
        if (config.stacks.bitcoin.enabled === true)
        {
            items["59faff1d86f7746c51718c9c"]._props.StackMaxSize = config.stacks.bitcoin.stackLimit;
        }
        if (config.stacks.gpcoin.enabled === true)
        {
            items["59faff1d86f7746c51718c9c"]._props.StackMaxSize = config.stacks.gpcoin.stackLimit;
        }
    }
}
// Logging to console for successful injection
const logger = container.resolve<ILogger>("WinstonLogger");

logger.info("Loading: BrammerN-AmmoStacks");


module.exports = { mod: new Mod() }