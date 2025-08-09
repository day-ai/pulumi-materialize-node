import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getRole(args?: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult>;
/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    readonly id: string;
    readonly region: string;
    readonly roles: outputs.GetRoleRole[];
}
export declare function getRoleOutput(args?: GetRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleResult>;
/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
