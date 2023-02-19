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
            items["5d6e68a8a4b9360b6c0d54e2"]._props.StackMaxSize = config.stacks.apslug.stackLimit;
        }

        if (config.stacks.ninepst.enabled === true)
        {
            items["56d59d3ad2720bdb418b4577"]._props.StackMaxSize = config.stacks.ninepst.stackLimit;
        }

        if (config.stacks.m855a1.enabled === true)
        {
            items["54527ac44bdc2d36668b4567"]._props.StackMaxSize = config.stacks.m855a1.stackLimit;
        }

        if (config.stacks.m856a1.enabled === true)
        {
            items["59e6906286f7746c9f75e847"]._props.StackMaxSize = config.stacks.m856a1.stackLimit;
        }

        if (config.stacks.m995.enabled === true)
        {
            items["59e690b686f7746c9f75e848"]._props.StackMaxSize = config.stacks.m995.stackLimit;
        }

        if (config.stacks.m61.enabled === true)
        {
            items["5a6086ea4f39f99cd479502f"]._props.StackMaxSize = config.stacks.m61.stackLimit;
        }

        if (config.stacks.m62.enabled === true)
        {
            items["5a608bf24f39f98ffc77720e"]._props.StackMaxSize = config.stacks.m62.stackLimit;
        }

        if (config.stacks.ignolik.enabled === true)
        {
            items["5c0d5e4486f77478390952fe"]._props.StackMaxSize = config.stacks.ignolik.stackLimit;
        }

        if (config.stacks.bp_762x39.enabled === true)
        {
            items["59e0d99486f7744a32234762"]._props.StackMaxSize = config.stacks.bp_762x39.stackLimit;
        }

        if (config.stacks.m80.enabled === true)
        {
            items["58dd3ad986f77403051cba8f"]._props.StackMaxSize = config.stacks.m80.stackLimit;
        }

        if (config.stacks.subsonicsx.enabled === true)
        {
            items["5ba26844d4351e00334c9475"]._props.StackMaxSize = config.stacks.subsonicsx.stackLimit;
        }

        if (config.stacks.mp7ap.enabled === true)
        {
            items["5ba26835d4351e0035628ff5"]._props.StackMaxSize = config.stacks.mp7ap.stackLimit;
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
            items["5d235b4d86f7742e017bc88a"]._props.StackMaxSize = config.stacks.gpcoin.stackLimit;
        }
    }
}
// Logging to console for successful injection
const logger = container.resolve<ILogger>("WinstonLogger");

logger.info("Loading: BrammerN-BetterStacks");


module.exports = { mod: new Mod() }