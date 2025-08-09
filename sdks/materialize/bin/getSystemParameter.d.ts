import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSystemParameter(args?: GetSystemParameterArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemParameterResult>;
/**
 * A collection of arguments for invoking getSystemParameter.
 */
export interface GetSystemParameterArgs {
    id?: string;
    name?: string;
    region?: string;
}
/**
 * A collection of values returned by getSystemParameter.
 */
export interface GetSystemParameterResult {
    readonly id: string;
    readonly name?: string;
    readonly parameters: outputs.GetSystemParameterParameter[];
    readonly region: string;
}
export declare function getSystemParameterOutput(args?: GetSystemParameterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSystemParameterResult>;
/**
 * A collection of arguments for invoking getSystemParameter.
 */
export interface GetSystemParameterOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
