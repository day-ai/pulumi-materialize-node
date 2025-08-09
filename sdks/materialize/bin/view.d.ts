import * as pulumi from "@pulumi/pulumi";
export declare class View extends pulumi.CustomResource {
    /**
     * Get an existing View resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ViewState, opts?: pulumi.CustomResourceOptions): View;
    /**
     * Returns true if the given object is an instance of View.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is View;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The SQL statement used to create the view.
     */
    readonly createSql: pulumi.Output<string>;
    /**
     * The identifier for the view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The identifier for the view.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The fully qualified name of the view.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the view schema in Materialize. Defaults to `public`.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The SQL statement for the view.
     */
    readonly statement: pulumi.Output<string>;
    readonly viewId: pulumi.Output<string>;
    /**
     * Create a View resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering View resources.
 */
export interface ViewState {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The SQL statement used to create the view.
     */
    createSql?: pulumi.Input<string>;
    /**
     * The identifier for the view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the view.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The fully qualified name of the view.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the view schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SQL statement for the view.
     */
    statement?: pulumi.Input<string>;
    viewId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a View resource.
 */
export interface ViewArgs {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the view.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the view schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SQL statement for the view.
     */
    statement: pulumi.Input<string>;
    viewId?: pulumi.Input<string>;
}
