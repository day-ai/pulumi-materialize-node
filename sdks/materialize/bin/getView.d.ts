import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getView(args?: GetViewArgs, opts?: pulumi.InvokeOptions): Promise<GetViewResult>;
/**
 * A collection of arguments for invoking getView.
 */
export interface GetViewArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getView.
 */
export interface GetViewResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly views: outputs.GetViewView[];
}
export declare function getViewOutput(args?: GetViewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetViewResult>;
/**
 * A collection of arguments for invoking getView.
 */
export interface GetViewOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
