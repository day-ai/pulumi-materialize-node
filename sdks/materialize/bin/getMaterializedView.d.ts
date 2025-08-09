import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getMaterializedView(args?: GetMaterializedViewArgs, opts?: pulumi.InvokeOptions): Promise<GetMaterializedViewResult>;
/**
 * A collection of arguments for invoking getMaterializedView.
 */
export interface GetMaterializedViewArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getMaterializedView.
 */
export interface GetMaterializedViewResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly materializedViews: outputs.GetMaterializedViewMaterializedView[];
    readonly region: string;
    readonly schemaName?: string;
}
export declare function getMaterializedViewOutput(args?: GetMaterializedViewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMaterializedViewResult>;
/**
 * A collection of arguments for invoking getMaterializedView.
 */
export interface GetMaterializedViewOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
