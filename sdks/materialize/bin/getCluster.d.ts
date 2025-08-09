import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getCluster(args?: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    readonly clusters: outputs.GetClusterCluster[];
    readonly id: string;
    readonly region: string;
}
export declare function getClusterOutput(args?: GetClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterResult>;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
