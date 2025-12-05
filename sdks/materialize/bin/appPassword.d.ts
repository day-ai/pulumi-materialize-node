import * as pulumi from "@pulumi/pulumi";
export declare class AppPassword extends pulumi.CustomResource {
    /**
     * Get an existing AppPassword resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppPasswordState, opts?: pulumi.CustomResourceOptions): AppPassword;
    /**
     * Returns true if the given object is an instance of AppPassword.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppPassword;
    readonly appPasswordId: pulumi.Output<string>;
    /**
     * The time at which the app password was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * A human-readable name for the app password.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The value of the app password.
     */
    readonly password: pulumi.Output<string>;
    /**
     * The roles to assign to the app password. Allowed values are 'Member' and 'Admin'. Only valid with service-type app passwords.
     */
    readonly roles: pulumi.Output<string[] | undefined>;
    readonly secret: pulumi.Output<string>;
    /**
     * The type of the app password: personal or service.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * The user to associate with the app password. Only valid with service-type app passwords.
     */
    readonly user: pulumi.Output<string | undefined>;
    /**
     * Create a AppPassword resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AppPasswordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AppPassword resources.
 */
export interface AppPasswordState {
    appPasswordId?: pulumi.Input<string>;
    /**
     * The time at which the app password was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * A human-readable name for the app password.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the app password.
     */
    password?: pulumi.Input<string>;
    /**
     * The roles to assign to the app password. Allowed values are 'Member' and 'Admin'. Only valid with service-type app passwords.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    secret?: pulumi.Input<string>;
    /**
     * The type of the app password: personal or service.
     */
    type?: pulumi.Input<string>;
    /**
     * The user to associate with the app password. Only valid with service-type app passwords.
     */
    user?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AppPassword resource.
 */
export interface AppPasswordArgs {
    appPasswordId?: pulumi.Input<string>;
    /**
     * A human-readable name for the app password.
     */
    name?: pulumi.Input<string>;
    /**
     * The roles to assign to the app password. Allowed values are 'Member' and 'Admin'. Only valid with service-type app passwords.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the app password: personal or service.
     */
    type?: pulumi.Input<string>;
    /**
     * The user to associate with the app password. Only valid with service-type app passwords.
     */
    user?: pulumi.Input<string>;
}
