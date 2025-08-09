import * as pulumi from "@pulumi/pulumi";
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    email: string;
}
/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly email: string;
    readonly id: string;
    readonly verified: boolean;
}
export declare function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserResult>;
/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserOutputArgs {
    email: pulumi.Input<string>;
}
