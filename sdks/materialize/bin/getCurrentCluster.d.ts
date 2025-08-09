import * as pulumi from "@pulumi/pulumi";
export declare function getCurrentCluster(args?: GetCurrentClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentClusterResult>;
/**
 * A collection of arguments for invoking getCurrentCluster.
 */
export interface GetCurrentClusterArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getCurrentCluster.
 */
export interface GetCurrentClusterResult {
    readonly id: string;
    readonly name: string;
    readonly region: string;
}
export declare function getCurrentClusterOutput(args?: GetCurrentClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCurrentClusterResult>;
/**
 * A collection of arguments for invoking getCurrentCluster.
 */
export interface GetCurrentClusterOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
