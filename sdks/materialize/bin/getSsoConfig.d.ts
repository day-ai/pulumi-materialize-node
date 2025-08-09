import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSsoConfig(args?: GetSsoConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetSsoConfigResult>;
/**
 * A collection of arguments for invoking getSsoConfig.
 */
export interface GetSsoConfigArgs {
    id?: string;
}
/**
 * A collection of values returned by getSsoConfig.
 */
export interface GetSsoConfigResult {
    readonly id: string;
    readonly ssoConfigs: outputs.GetSsoConfigSsoConfig[];
}
export declare function getSsoConfigOutput(args?: GetSsoConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSsoConfigResult>;
/**
 * A collection of arguments for invoking getSsoConfig.
 */
export interface GetSsoConfigOutputArgs {
    id?: pulumi.Input<string>;
}
