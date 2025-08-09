import * as pulumi from "@pulumi/pulumi";
export declare class TableGrant extends pulumi.CustomResource {
    /**
     * Get an existing TableGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableGrantState, opts?: pulumi.CustomResourceOptions): TableGrant;
    /**
     * Returns true if the given object is an instance of TableGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TableGrant;
    /**
     * The database that the table belongs to.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * The privilege to grant to the object.
     */
    readonly privilege: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The name of the role to grant privilege to.
     */
    readonly roleName: pulumi.Output<string>;
    /**
     * The schema that the table being to.
     */
    readonly schemaName: pulumi.Output<string>;
    readonly tableGrantId: pulumi.Output<string>;
    /**
     * The table that is being granted on.
     */
    readonly tableName: pulumi.Output<string>;
    /**
     * Create a TableGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableGrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TableGrant resources.
 */
export interface TableGrantState {
    /**
     * The database that the table belongs to.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName?: pulumi.Input<string>;
    /**
     * The schema that the table being to.
     */
    schemaName?: pulumi.Input<string>;
    tableGrantId?: pulumi.Input<string>;
    /**
     * The table that is being granted on.
     */
    tableName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TableGrant resource.
 */
export interface TableGrantArgs {
    /**
     * The database that the table belongs to.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName: pulumi.Input<string>;
    /**
     * The schema that the table being to.
     */
    schemaName: pulumi.Input<string>;
    tableGrantId?: pulumi.Input<string>;
    /**
     * The table that is being granted on.
     */
    tableName: pulumi.Input<string>;
}
