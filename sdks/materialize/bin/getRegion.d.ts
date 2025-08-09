import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getRegion(args?: GetRegionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegionResult>;
/**
 * A collection of arguments for invoking getRegion.
 */
export interface GetRegionArgs {
    id?: string;
}
/**
 * A collection of values returned by getRegion.
 */
export interface GetRegionResult {
    readonly id: string;
    readonly regions: outputs.GetRegionRegion[];
}
export declare function getRegionOutput(args?: GetRegionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRegionResult>;
/**
 * A collection of arguments for invoking getRegion.
 */
export interface GetRegionOutputArgs {
    id?: pulumi.Input<string>;
}
