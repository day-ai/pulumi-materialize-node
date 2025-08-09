import * as pulumi from "@pulumi/pulumi";
export declare class ViewGrant extends pulumi.CustomResource {
    /**
     * Get an existing ViewGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ViewGrantState, opts?: pulumi.CustomResourceOptions): ViewGrant;
    /**
     * Returns true if the given object is an instance of ViewGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ViewGrant;
    /**
     * The database that the view belongs to.
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
     * The schema that the view being to.
     */
    readonly schemaName: pulumi.Output<string>;
    readonly viewGrantId: pulumi.Output<string>;
    /**
     * The view that is being granted on.
     */
    readonly viewName: pulumi.Output<string>;
    /**
     * Create a ViewGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewGrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ViewGrant resources.
 */
export interface ViewGrantState {
    /**
     * The database that the view belongs to.
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
     * The schema that the view being to.
     */
    schemaName?: pulumi.Input<string>;
    viewGrantId?: pulumi.Input<string>;
    /**
     * The view that is being granted on.
     */
    viewName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ViewGrant resource.
 */
export interface ViewGrantArgs {
    /**
     * The database that the view belongs to.
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
     * The schema that the view being to.
     */
    schemaName: pulumi.Input<string>;
    viewGrantId?: pulumi.Input<string>;
    /**
     * The view that is being granted on.
     */
    viewName: pulumi.Input<string>;
}
