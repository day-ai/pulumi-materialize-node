import * as pulumi from "@pulumi/pulumi";
export declare class TypeGrant extends pulumi.CustomResource {
    /**
     * Get an existing TypeGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TypeGrantState, opts?: pulumi.CustomResourceOptions): TypeGrant;
    /**
     * Returns true if the given object is an instance of TypeGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TypeGrant;
    /**
     * The database that the type belongs to.
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
     * The schema that the type being to.
     */
    readonly schemaName: pulumi.Output<string>;
    readonly typeGrantId: pulumi.Output<string>;
    /**
     * The type that is being granted on.
     */
    readonly typeName: pulumi.Output<string>;
    /**
     * Create a TypeGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TypeGrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TypeGrant resources.
 */
export interface TypeGrantState {
    /**
     * The database that the type belongs to.
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
     * The schema that the type being to.
     */
    schemaName?: pulumi.Input<string>;
    typeGrantId?: pulumi.Input<string>;
    /**
     * The type that is being granted on.
     */
    typeName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TypeGrant resource.
 */
export interface TypeGrantArgs {
    /**
     * The database that the type belongs to.
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
     * The schema that the type being to.
     */
    schemaName: pulumi.Input<string>;
    typeGrantId?: pulumi.Input<string>;
    /**
     * The type that is being granted on.
     */
    typeName: pulumi.Input<string>;
}
