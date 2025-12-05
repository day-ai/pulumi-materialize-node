import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Index extends pulumi.CustomResource {
    /**
     * Get an existing Index resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexState, opts?: pulumi.CustomResourceOptions): Index;
    /**
     * Returns true if the given object is an instance of Index.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Index;
    /**
     * The cluster to maintain this index.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The expressions to use as the key for the index.
     */
    readonly colExprs: pulumi.Output<outputs.IndexColExpr[] | undefined>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The identifier for the index database.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * Creates a default index using all inferred columns are used. Required if<span pulumi-lang-nodejs=" colExpr " pulumi-lang-dotnet=" ColExpr " pulumi-lang-go=" colExpr " pulumi-lang-python=" col_expr " pulumi-lang-yaml=" colExpr " pulumi-lang-java=" colExpr "> col_expr </span>is not set.
     */
    readonly default: pulumi.Output<boolean | undefined>;
    readonly indexId: pulumi.Output<string>;
    /**
     * The name of the index method to use.
     */
    readonly method: pulumi.Output<string | undefined>;
    /**
     * The identifier for the index.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the source, view, or materialized view on which you want to create an index.
     */
    readonly objName: pulumi.Output<outputs.IndexObjName>;
    /**
     * The fully qualified name of the index.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the index schema.
     */
    readonly schemaName: pulumi.Output<string>;
    /**
     * Create a Index resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Index resources.
 */
export interface IndexState {
    /**
     * The cluster to maintain this index.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The expressions to use as the key for the index.
     */
    colExprs?: pulumi.Input<pulumi.Input<inputs.IndexColExpr>[]>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the index database.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Creates a default index using all inferred columns are used. Required if<span pulumi-lang-nodejs=" colExpr " pulumi-lang-dotnet=" ColExpr " pulumi-lang-go=" colExpr " pulumi-lang-python=" col_expr " pulumi-lang-yaml=" colExpr " pulumi-lang-java=" colExpr "> col_expr </span>is not set.
     */
    default?: pulumi.Input<boolean>;
    indexId?: pulumi.Input<string>;
    /**
     * The name of the index method to use.
     */
    method?: pulumi.Input<string>;
    /**
     * The identifier for the index.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the source, view, or materialized view on which you want to create an index.
     */
    objName?: pulumi.Input<inputs.IndexObjName>;
    /**
     * The fully qualified name of the index.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the index schema.
     */
    schemaName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Index resource.
 */
export interface IndexArgs {
    /**
     * The cluster to maintain this index.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The expressions to use as the key for the index.
     */
    colExprs?: pulumi.Input<pulumi.Input<inputs.IndexColExpr>[]>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * Creates a default index using all inferred columns are used. Required if<span pulumi-lang-nodejs=" colExpr " pulumi-lang-dotnet=" ColExpr " pulumi-lang-go=" colExpr " pulumi-lang-python=" col_expr " pulumi-lang-yaml=" colExpr " pulumi-lang-java=" colExpr "> col_expr </span>is not set.
     */
    default?: pulumi.Input<boolean>;
    indexId?: pulumi.Input<string>;
    /**
     * The name of the index method to use.
     */
    method?: pulumi.Input<string>;
    /**
     * The identifier for the index.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the source, view, or materialized view on which you want to create an index.
     */
    objName: pulumi.Input<inputs.IndexObjName>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
}
