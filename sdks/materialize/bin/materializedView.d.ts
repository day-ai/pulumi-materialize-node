import * as pulumi from "@pulumi/pulumi";
export declare class MaterializedView extends pulumi.CustomResource {
    /**
     * Get an existing MaterializedView resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MaterializedViewState, opts?: pulumi.CustomResourceOptions): MaterializedView;
    /**
     * Returns true if the given object is an instance of MaterializedView.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MaterializedView;
    /**
     * The cluster to maintain the materialized view.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The SQL statement used to create the materialized view.
     */
    readonly createSql: pulumi.Output<string>;
    /**
     * The identifier for the materialized view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    readonly materializedViewId: pulumi.Output<string>;
    /**
     * The identifier for the materialized view.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of columns for which to create non-null assertions.
     */
    readonly notNullAssertions: pulumi.Output<string[] | undefined>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The fully qualified name of the materialized view.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the materialized view schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The SQL statement for the materialized view.
     */
    readonly statement: pulumi.Output<string>;
    /**
     * Create a MaterializedView resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaterializedViewArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MaterializedView resources.
 */
export interface MaterializedViewState {
    /**
     * The cluster to maintain the materialized view.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The SQL statement used to create the materialized view.
     */
    createSql?: pulumi.Input<string>;
    /**
     * The identifier for the materialized view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    materializedViewId?: pulumi.Input<string>;
    /**
     * The identifier for the materialized view.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of columns for which to create non-null assertions.
     */
    notNullAssertions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The fully qualified name of the materialized view.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the materialized view schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SQL statement for the materialized view.
     */
    statement?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a MaterializedView resource.
 */
export interface MaterializedViewArgs {
    /**
     * The cluster to maintain the materialized view.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the materialized view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    materializedViewId?: pulumi.Input<string>;
    /**
     * The identifier for the materialized view.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of columns for which to create non-null assertions.
     */
    notNullAssertions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the materialized view schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SQL statement for the materialized view.
     */
    statement: pulumi.Input<string>;
}
