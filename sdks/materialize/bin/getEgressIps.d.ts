import * as pulumi from "@pulumi/pulumi";
export declare function getEgressIps(args?: GetEgressIpsArgs, opts?: pulumi.InvokeOptions): Promise<GetEgressIpsResult>;
/**
 * A collection of arguments for invoking getEgressIps.
 */
export interface GetEgressIpsArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getEgressIps.
 */
export interface GetEgressIpsResult {
    readonly egressIps: string[];
    readonly id: string;
    readonly region: string;
}
export declare function getEgressIpsOutput(args?: GetEgressIpsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEgressIpsResult>;
/**
 * A collection of arguments for invoking getEgressIps.
 */
export interface GetEgressIpsOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
