import * as pulumi from "@pulumi/pulumi";
export declare class ScimGroup extends pulumi.CustomResource {
    /**
     * Get an existing ScimGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScimGroupState, opts?: pulumi.CustomResourceOptions): ScimGroup;
    /**
     * Returns true if the given object is an instance of ScimGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScimGroup;
    /**
     * A description of the SCIM group.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The name of the SCIM group.
     */
    readonly name: pulumi.Output<string>;
    readonly scimGroupId: pulumi.Output<string>;
    /**
     * Create a ScimGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ScimGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScimGroup resources.
 */
export interface ScimGroupState {
    /**
     * A description of the SCIM group.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the SCIM group.
     */
    name?: pulumi.Input<string>;
    scimGroupId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScimGroup resource.
 */
export interface ScimGroupArgs {
    /**
     * A description of the SCIM group.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the SCIM group.
     */
    name?: pulumi.Input<string>;
    scimGroupId?: pulumi.Input<string>;
}
